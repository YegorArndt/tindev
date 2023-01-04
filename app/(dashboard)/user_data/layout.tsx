import { SidebarNav } from "app/components";
import { routes } from "app/constants";

export default function UserFieldsLayout({ children }: Layout) {
  return (
    <div className="min-h-screen">
      <section
        aria-label="Your data that the companies will see"
        className="py-12 border-bottom"
      >
        <h1 className="container font-medium">
          Your data that the companies will see
        </h1>
        <p className="container mt-2">
          The more information you provide, the more accurate our algorithm
          works.
        </p>
      </section>
      <div className="container grid grid-cols-4">
        <SidebarNav
          links={[
            {
              text: "All",
              to: routes.all_user_data,
            },
            {
              text: "Only required fields",
              to: routes.only_required_user_data,
            },
            {
              text: "Only optional fields",
              to: routes.only_optional_user_data,
            },
          ]}
        />
        {/* This makes sure search input doesn't have mb-8  */}
        {/* Remove border top for first element, since it's provided by search input's border bottom */}
        <div className="col-span-3 [&>section]:mb-8 [&>section:first-of-type]:border-t-0">
          {children}
        </div>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      </div>
    </div>
  );
}
