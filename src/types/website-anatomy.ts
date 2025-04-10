// Website Anatomy Types
export namespace WebsiteAnatomy {
  // Root Layout
  export type RootLayout = {
    Header: HeaderSection;
    Main: MainContent;
    Footer: FooterSection;
  };

  // Header Section
  export type HeaderSection = {
    HeaderContainer: {
      Branding: {
        HeaderLogo: string;
        HeaderTitle: string;
      };
      Navigation: NavigationSection;
      HeaderActions: {
        SearchBar?: SearchComponent;
        UserProfile?: ProfileComponent;
        ActionButtons: ButtonComponent[];
      };
    };
  };

  // Navigation Section
  export type NavigationSection = {
    NavigationBar: {
      NavigationContainer: {
        DesktopNavigation: NavigationItems;
        MobileNavigation: {
          MenuButton: ButtonComponent;
          MenuPanel: NavigationItems;
        };
      };
    };
    NavigationItems: {
      NavLinks: Array<{
        label: string;
        href: string;
        icon?: string;
      }>;
    };
  };

  // Main Content
  export type MainContent = {
    PageContainer: {
      PageHeader: {
        PageTitle: string;
        PageDescription?: string;
        PageActions?: ButtonComponent[];
      };
      PageContent: {
        Sections: Section[];
        Sidebar?: SidebarSection;
      };
    };
  };

  // Section Types
  export type Section = {
    SectionContainer: {
      SectionHeader?: {
        title: string;
        description?: string;
      };
      SectionContent: ContentBlock[];
    };
  };

  // Footer Section
  export type FooterSection = {
    FooterContainer: {
      FooterNavigation: {
        PrimaryLinks: LinkComponent[];
        SecondaryLinks: LinkComponent[];
      };
      FooterSections: {
        ContactInfo: ContactSection;
        SocialLinks: SocialSection;
        LegalLinks: LegalSection;
      };
      FooterBottom: {
        Copyright: string;
        AdditionalInfo?: string;
      };
    };
  };

  // Common UI Components
  export type UIComponents = {
    Buttons: ButtonComponent;
    Forms: FormComponent;
    Cards: CardComponent;
    Lists: ListComponent;
    Modals: ModalComponent;
    Alerts: AlertComponent;
  };

  // Layout Components
  export type LayoutComponents = {
    Container: {
      maxWidth?: string;
      padding?: string;
      children: React.ReactNode;
    };
    Grid: {
      columns: number;
      gap?: string;
      children: React.ReactNode;
    };
    Flex: {
      direction?: 'row' | 'column';
      gap?: string;
      children: React.ReactNode;
    };
    Section: {
      padding?: string;
      background?: string;
      children: React.ReactNode;
    };
  };

  // Interactive Components
  export type FormComponents = {
    Input: InputComponent;
    TextArea: TextAreaComponent;
    Select: SelectComponent;
    Checkbox: CheckboxComponent;
    Radio: RadioComponent;
    Switch: SwitchComponent;
    Label: LabelComponent;
    ValidationMessage: ValidationComponent;
  };

  // Media Components
  export type MediaComponents = {
    Image: ImageComponent;
    Video: VideoComponent;
    Icon: IconComponent;
    Gallery: GalleryComponent;
  };

  // Typography Components
  export type TypographyComponents = {
    Heading: {
      level: 1 | 2 | 3 | 4 | 5 | 6;
      children: React.ReactNode;
    };
    Paragraph: {
      size?: 'small' | 'medium' | 'large';
      children: React.ReactNode;
    };
    Text: {
      variant?: 'body' | 'caption' | 'label';
      children: React.ReactNode;
    };
  };

  // Utility Components
  export type UtilityComponents = {
    Loading: LoadingComponent;
    Error: ErrorComponent;
    Success: SuccessComponent;
    Tooltip: TooltipComponent;
    Popover: PopoverComponent;
  };

  // Component Base Types
  export type BaseComponent = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  };

  export type ButtonComponent = BaseComponent & {
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
  };

  export type LinkComponent = BaseComponent & {
    href: string;
    external?: boolean;
  };

  export type InputComponent = BaseComponent & {
    type?: 'text' | 'email' | 'password' | 'number';
    value?: string;
    onChange?: (value: string) => void;
  };

  export type ImageComponent = BaseComponent & {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };

  // State Types
  export type ComponentStates = {
    isLoading?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    isDisabled?: boolean;
    isActive?: boolean;
  };

  // Responsive Types
  export type ResponsiveBreakpoints = {
    mobile: string;
    tablet: string;
    desktop: string;
    wide: string;
  };

  // Theme Types
  export type ThemeConfig = {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      error: string;
      success: string;
    };
    typography: {
      fontFamily: string;
      fontSize: {
        small: string;
        medium: string;
        large: string;
      };
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
  };

  // Base Types
  export type SearchComponent = BaseComponent & {
    onSearch: (query: string) => void;
  };

  export type ProfileComponent = BaseComponent & {
    user: {
      name: string;
      avatar?: string;
    };
  };

  export type NavigationItems = {
    NavLinks: Array<{
      label: string;
      href: string;
      icon?: string;
    }>;
  };

  export type SidebarSection = {
    content: React.ReactNode;
  };

  export type ContentBlock = {
    id: string;
    content: React.ReactNode;
  };

  export type ContactSection = {
    email: string;
    phone?: string;
    address?: string;
  };

  export type SocialSection = {
    links: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
  };

  export type LegalSection = {
    links: Array<{
      label: string;
      href: string;
    }>;
  };

  export type FormComponent = {
    onSubmit: (data: any) => void;
    fields: Array<InputComponent>;
  };

  // UI Component Types
  export type CardComponent = BaseComponent & {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    image?: string;
  };

  export type ListComponent = BaseComponent & {
    items: React.ReactNode[];
    ordered?: boolean;
  };

  export type ModalComponent = BaseComponent & {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
  };

  export type AlertComponent = BaseComponent & {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
  };

  // Form Field Types
  export type TextAreaComponent = InputComponent & {
    rows?: number;
    maxLength?: number;
  };

  export type SelectComponent = BaseComponent & {
    options: Array<{
      value: string;
      label: string;
    }>;
    value?: string;
    onChange?: (value: string) => void;
  };

  export type CheckboxComponent = BaseComponent & {
    checked: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
  };

  export type RadioComponent = BaseComponent & {
    checked: boolean;
    value: string;
    name: string;
    onChange?: (value: string) => void;
    label?: string;
  };

  export type SwitchComponent = BaseComponent & {
    checked: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
  };

  export type LabelComponent = BaseComponent & {
    htmlFor?: string;
    required?: boolean;
  };

  export type ValidationComponent = BaseComponent & {
    type: 'error' | 'warning' | 'success';
    message: string;
  };

  // Media Component Types
  export type VideoComponent = BaseComponent & {
    src: string;
    poster?: string;
    controls?: boolean;
    autoPlay?: boolean;
  };

  export type IconComponent = BaseComponent & {
    name: string;
    size?: 'small' | 'medium' | 'large';
    color?: string;
  };

  export type GalleryComponent = BaseComponent & {
    images: Array<{
      src: string;
      alt: string;
      caption?: string;
    }>;
  };

  // Utility Component Types
  export type LoadingComponent = BaseComponent & {
    size?: 'small' | 'medium' | 'large';
    variant?: 'spinner' | 'dots' | 'bar';
  };

  export type ErrorComponent = BaseComponent & {
    title?: string;
    message: string;
    action?: () => void;
  };

  export type SuccessComponent = BaseComponent & {
    title?: string;
    message: string;
    action?: () => void;
  };

  export type TooltipComponent = BaseComponent & {
    content: React.ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left';
  };

  export type PopoverComponent = BaseComponent & {
    trigger: React.ReactNode;
    content: React.ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left';
  };
}

// Export default type for easy import
export type Website = WebsiteAnatomy.RootLayout;

// Usage example:
/*
import { WebsiteAnatomy } from './website-anatomy';

const website: WebsiteAnatomy.Website = {
  Header: {
    // Header implementation
  },
  Main: {
    // Main content implementation
  },
  Footer: {
    // Footer implementation
  }
};
*/ 