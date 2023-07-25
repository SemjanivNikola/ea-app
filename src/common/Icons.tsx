const DEFAULT_ICON_SIZE = 24;
const DEFAULT_ICON_COLOR = "#1c1c1e";

type IconName =
    | "open-drawer"
    | "close-drawer"
    | "chevron-left"
    | "chevron-right"
    | "account"
    | "create-account"
    | "plus";

type IconProps = {
    name: IconName;
    size?: number;
    color?: string;
};

const Icon = ({ name, size = DEFAULT_ICON_SIZE, color = DEFAULT_ICON_COLOR }: IconProps) => {
    function getIcon() {
        switch (name) {
            case "open-drawer":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22H21V20H12V22ZM12 16H21V14H12V16ZM3 10H21V8H3V10ZM3 2V4H21V2H3Z"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.00078 23L9.17578 21.825L5.35911 18L9.17578 14.175L8.00078 13L3.00078 18L8.00078 23Z"
                        />
                    </svg>
                );
            case "close-drawer":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 22H12V20H3V22ZM3 16H12V14H3V16ZM3 10H21V8H3V10ZM3 2V4H21V2H3Z"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.175 13L15 14.175L18.8167 18L15 21.825L16.175 23L21.175 18L16.175 13Z"
                        />
                    </svg>
                );
            case "chevron-left":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                    </svg>
                );
            case "chevron-right":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                );
            case "account":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                    </svg>
                );
            case "create-account":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />
                    </svg>
                );
            case "plus":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                );
            case "sync":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z" />
                    </svg>
                );
            case "close":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
                    </svg>
                );
            case "info":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                    </svg>
                );
            case "alert":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12M11 7V13H13V7M11 15V17H13V15Z" />
                    </svg>
                );
            case "check":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                    </svg>
                );
            case "check-empty":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                );
            case "attachment":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z" />
                    </svg>
                );
            case "document":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
                    </svg>
                );
            case "create-document":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M23 18H20V15H18V18H15V20H18V23H20V20H23M6 2C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H13.81C13.45 21.38 13.2 20.7 13.08 20H6V4H13V9H18V13.08C18.33 13.03 18.67 13 19 13C19.34 13 19.67 13.03 20 13.08V8L14 2M8 12V14H16V12M8 16V18H13V16Z" />
                    </svg>
                );
            case "contact-list":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M20,0H4V2H20V0M4,24H20V22H4V24M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M12,6.75A2.25,2.25 0 0,1 14.25,9A2.25,2.25 0 0,1 12,11.25A2.25,2.25 0 0,1 9.75,9A2.25,2.25 0 0,1 12,6.75M17,17H7V15.5C7,13.83 10.33,13 12,13C13.67,13 17,13.83 17,15.5V17Z" />
                    </svg>
                );
            case "delivery-truck":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M3,13.5L2.25,12H7.5L6.9,10.5H2L1.25,9H9.05L8.45,7.5H1.11L0.25,6H4A2,2 0 0,1 6,4H18V8H21L24,12V17H22A3,3 0 0,1 19,20A3,3 0 0,1 16,17H12A3,3 0 0,1 9,20A3,3 0 0,1 6,17H4V13.5H3M19,18.5A1.5,1.5 0 0,0 20.5,17A1.5,1.5 0 0,0 19,15.5A1.5,1.5 0 0,0 17.5,17A1.5,1.5 0 0,0 19,18.5M20.5,9.5H18V12H22.46L20.5,9.5M9,18.5A1.5,1.5 0 0,0 10.5,17A1.5,1.5 0 0,0 9,15.5A1.5,1.5 0 0,0 7.5,17A1.5,1.5 0 0,0 9,18.5Z" />
                    </svg>
                );
            case "company":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z" />
                    </svg>
                );
            case "message":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18" />
                    </svg>
                );
            case "chart":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L22,21Z" />
                    </svg>
                );
            case "currency-euro":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M15 18.5C12.5 18.5 10.32 17.08 9.24 15H15L16 13H8.58C8.53 12.67 8.5 12.34 8.5 12S8.53 11.33 8.58 11H15L16 9H9.24C10.32 6.92 12.5 5.5 15 5.5C16.61 5.5 18.09 6.09 19.23 7.07L21 5.3C19.41 3.87 17.3 3 15 3C11.08 3 7.76 5.5 6.5 9H3L2 11H6.06C6 11.33 6 11.66 6 12S6 12.67 6.06 13H3L2 15H6.5C7.76 18.5 11.08 21 15 21C17.31 21 19.41 20.13 21 18.7L19.22 16.93C18.09 17.91 16.62 18.5 15 18.5Z" />
                    </svg>
                );
            case "timeline-clock":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M4 2V8H2V2H4M2 22V16H4V22H2M5 12C5 13.11 4.11 14 3 14C1.9 14 1 13.11 1 12C1 10.9 1.9 10 3 10C4.11 10 5 10.9 5 12M16 4C20.42 4 24 7.58 24 12C24 16.42 20.42 20 16 20C12.4 20 9.36 17.62 8.35 14.35L6 12L8.35 9.65C9.36 6.38 12.4 4 16 4M16 6C12.69 6 10 8.69 10 12C10 15.31 12.69 18 16 18C19.31 18 22 15.31 22 12C22 8.69 19.31 6 16 6M15 13V8H16.5V12.2L19.5 14L18.68 15.26L15 13Z" />
                    </svg>
                );
            case "checkbook":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M5,14H19V15H5V14M21,17V8H3V17H21M1,5H23V19H1V5M5,10H12V12H5V10Z" />
                    </svg>
                );
            case "hand-coin":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M16 12C18.76 12 21 9.76 21 7S18.76 2 16 2 11 4.24 11 7 13.24 12 16 12M21.45 17.6C21.06 17.2 20.57 17 20 17H13L10.92 16.27L11.25 15.33L13 16H15.8C16.15 16 16.43 15.86 16.66 15.63S17 15.12 17 14.81C17 14.27 16.74 13.9 16.22 13.69L8.95 11H7V20L14 22L22.03 19C22.04 18.47 21.84 18 21.45 17.6M5 11H.984V22H5V11Z" />
                    </svg>
                );
            case "signout":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z" />
                    </svg>
                );
            case "conditions-outside":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M22,3H5A2,2 0 0,0 3,5V9H5V5H22V19H5V15H3V19A2,2 0 0,0 5,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M7,15V13H0V11H7V9L11,12L7,15M20,13H13V11H20V13M20,9H13V7H20V9M17,17H13V15H17V17Z" />
                    </svg>
                );
            case "reply":
                return (
                    <svg viewBox="0 0 24 24" fill={color}>
                        <path d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z" />
                    </svg>
                );
            default:
                return <></>;
        }
    }

    return (
        <div className="icon-wrapper" style={{ width: size + "px", height: size + "px" }}>
            {getIcon()}
        </div>
    );
};

export default Icon;
