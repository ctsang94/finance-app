import AppleLogo from "../assets/logos/app_store.svg";
import StoreLink from "../common/StoreLink";
import GooglePlay from "../assets/logos/google_play.svg";

const StoreLinks = () => {
  return (
    <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal">
      <StoreLink
        href="https://www.apple.com/app-store"
        className="active:big-zinc-800 flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950"
        upperText="Download on the"
        lowerText="App store"
        logo={AppleLogo}
        target="_blank"
      />
      <StoreLink
        href="https://play.google.com"
        className="active:big-zinc-800 flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950"
        upperText="Get it on"
        lowerText="Google Play Store"
        logo={GooglePlay}
        target="_blank"
      />
    </div>
  );
};

export default StoreLinks;
