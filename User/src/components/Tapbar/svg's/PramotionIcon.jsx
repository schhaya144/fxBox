import { Link } from 'react-router-dom';

const PromotionIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-16 w-16 border-2 border-white rounded-full -translate-y-2 -translate-x-1 bg-gradient-to-r from-red-500 to-red-300 relative -top-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 57 49"
          fill="none"
          className="w-full h-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.93876 1.50122C9.69785 0.55236 10.8471 0 12.0622 0H44.2172C45.4324 0 46.5816 0.552359 47.3407 1.50122L55.0792 11.1744C55.5056 11.7073 55.828 12.2943 56.0469 12.9092H0.232598C0.451468 12.2943 0.773925 11.7073 1.20023 11.1744L8.93876 1.50122ZM0 16.091H56.2795C56.0896 17.0496 55.664 17.9709 55.0034 18.7637L31.2126 47.3125C29.6134 49.2316 26.666 49.2316 25.0669 47.3125L1.27612 18.7637C0.615521 17.9709 0.189841 17.0496 0 16.091ZM20.5563 22.0266L27.7513 32.1286C27.9512 32.4093 28.3685 32.4083 28.5671 32.1267L35.6853 22.0338C36.1425 21.3856 36.8863 21 37.6795 21C39.0272 21 40.1198 22.0925 40.1198 23.4403V23.6393H39.8972C39.5712 23.6393 39.1148 23.8877 38.5931 24.5708C38.0874 25.2331 32.1271 33.2938 28.9417 37.6047C28.7578 37.8535 28.467 38 28.1577 38C27.8515 38 27.5632 37.8562 27.379 37.6117L17.3204 24.2603C17.3204 24.2603 16.9258 23.6393 16.2608 23.6393H16.1198V23.445C16.1198 22.0947 17.2144 21 18.5648 21C19.3556 21 20.0975 21.3825 20.5563 22.0266Z"
            fill="white"
          />
        </svg>
      </div>
      <Link to="/promotion-panel">
        <p className="text-sm font-semibold opacity-80 pe-3 relative -top-2">
          Promotion
        </p>
      </Link>
    </div>
  );
};

export default PromotionIcon;
