import { Suspense } from "react";
import VideoHero from "@/components/home/VideoHero";
import CategorySelector from "@/components/home/CategorySelector";
import CategorySelectorSkeleton from "@/components/home/CategorySelectorSkeleton";
import { getAllCategories } from "@/utils/getAllCategories";
import { getHeroVideos } from "@/utils/getHeroVideos";
import SaleBanner from "@/components/home/SaleBanner";
import SaleBannerSkeleton from "@/components/home/SaleBannerSkeleton";
import NewArrivals from "@/components/home/NewArrivals";
import NewArrivalsSkeleton from "@/components/home/NewArrivalsSkeleton";
import OnSaleItems from "@/components/home/OnSaleItems";
import OnSaleItemsSkeleton from "@/components/home/OnSaleItemsSkeleton";

// Fetched in its own component so the hero can render while categories stream in.
async function Categories() {
  const categories = await getAllCategories();
  return <CategorySelector categories={categories} />;
}

export default async function Home() {
  const videos = await getHeroVideos();

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <div className="w-full">
        <VideoHero videos={videos} />
        <Suspense fallback={<CategorySelectorSkeleton />}>
          <Categories />
        </Suspense>

        <Suspense fallback={<SaleBannerSkeleton />}>
          <SaleBanner />
        </Suspense>

        <Suspense fallback={<OnSaleItemsSkeleton />}>
          <OnSaleItems />
        </Suspense>

        <Suspense fallback={<NewArrivalsSkeleton />}>
          <NewArrivals />
        </Suspense>
      </div>
    </div>
  );
}
