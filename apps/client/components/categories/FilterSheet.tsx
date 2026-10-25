"use client";

import { type PointerEvent, type ReactNode, useRef, useState } from "react";
import { Dialog, DialogTrigger, Heading, Modal, ModalOverlay } from "react-aria-components";
import { FilterLines, XClose } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

type FilterSheetProps = {
  activeCount: number;
  resultCount: number;
  onClearAll: () => void;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode; // the FilterRail
};

// Dragging the sheet down this far, or flicking it, closes it.
const CLOSE_DISTANCE = 100;
const CLOSE_VELOCITY = 0.6; // px per ms

// Phones and tablets: a "Filters" button that opens the rail in a bottom
// sheet. React Aria handles focus, Escape and locking the page scroll.
// Filters apply as they're chosen; "Show N results" just closes the sheet.
export default function FilterSheet({
  activeCount,
  resultCount,
  onClearAll,
  onOpenChange,
  children,
}: FilterSheetProps) {
  const [isOpen, setOpen] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ startY: number; startTime: number } | null>(null);

  const setOpenState = (open: boolean) => {
    setOpen(open);
    setDragY(0);
    onOpenChange?.(open);
  };

  // Swipe down on the handle or header to close; a short drag springs back.
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    // Leave the close button and other controls to work normally.
    if ((event.target as HTMLElement).closest("button")) return;
    drag.current = { startY: event.clientY, startTime: event.timeStamp };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    setDragY(Math.max(0, event.clientY - drag.current.startY));
  };
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const distance = event.clientY - drag.current.startY;
    const velocity = distance / Math.max(1, event.timeStamp - drag.current.startTime);
    drag.current = null;
    setDragging(false);
    if (distance > CLOSE_DISTANCE || velocity > CLOSE_VELOCITY) setOpenState(false);
    else setDragY(0);
  };

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={setOpenState}>
      <Button color="secondary" size="sm" iconLeading={FilterLines} className="lg:hidden">
        Filters
        {activeCount > 0 && (
          <span className="grid h-5 min-w-5 place-items-center rounded-full bg-gray-950 px-1 text-xs font-semibold text-white">
            {activeCount}
          </span>
        )}
      </Button>

      <ModalOverlay
        isDismissable
        className="fixed inset-0 z-[60] bg-black/40 entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out"
      >
        <Modal
          style={{ transform: dragY ? `translateY(${dragY}px)` : undefined }}
          className={cx(
            "fixed inset-x-0 bottom-0 flex max-h-[85dvh] flex-col rounded-t-2xl bg-white shadow-xl outline-none entering:animate-in entering:slide-in-from-bottom exiting:animate-out exiting:slide-out-to-bottom",
            // Follow the finger while dragging; ease back when released.
            !dragging && "motion-safe:transition-transform",
          )}
        >
          <Dialog className="flex min-h-0 flex-1 flex-col outline-none">
            {({ close }) => (
              <>
                <div
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                  className="touch-none border-b border-gray-200 px-5 pt-2 pb-3"
                >
                  {/* Drag handle: a visual cue; the whole header is draggable. */}
                  <div aria-hidden="true" className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-gray-300" />
                  <div className="flex items-center justify-between">
                    <Heading slot="title" className="text-base font-semibold text-gray-950">
                      Filters
                    </Heading>
                    <Button
                      aria-label="Close filters"
                      color="tertiary"
                      size="sm"
                      iconLeading={XClose}
                      onPress={close}
                    />
                  </div>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto px-5">{children}</div>

                <div className="flex gap-3 border-t border-gray-200 px-5 py-4">
                  <Button
                    color="secondary"
                    size="lg"
                    className="flex-1"
                    onPress={onClearAll}
                    isDisabled={activeCount === 0}
                  >
                    Clear all
                  </Button>
                  <Button
                    color="primary"
                    size="lg"
                    className="flex-[2]"
                    onPress={close}
                    isDisabled={resultCount === 0}
                  >
                    {resultCount === 0
                      ? "No results"
                      : `Show ${resultCount} ${resultCount === 1 ? "result" : "results"}`}
                  </Button>
                </div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
