# Monorepo

- A monorepo is a single code repository that contains the source code for multiple projects, services or packages.

- Pros: It becomes easy to share types, utilities, ui components etc between different apps.

- Cons: It becomes difficult to test, maintain and build as the workspace grows. To prevent this we need a tool that can cache builds and check dependencies before the next deployment. We will be using "Turborepo" for the same.

# Turborepo

- The turborepo has 2 main folders
    - apps -> All our applications like E-com client, admin dashboard and all the backend services.
    - packages -> We will store shared tools like types, utilities, configurations

