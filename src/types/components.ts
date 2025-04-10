// Layout Types
export type LayoutComponents = 
  | 'Layout'
  | 'LayoutContainer'
  | 'LayoutWrapper'
  | 'LayoutSection'
  | 'LayoutGrid'
  | 'LayoutFlex'
  | 'LayoutStack';

export type ContainerComponents = 
  | 'Container'
  | 'ContainerFluid'
  | 'ContainerFixed'
  | 'ContainerResponsive'
  | 'ContentContainer'
  | 'SectionContainer';

export type GridComponents = 
  | 'Grid'
  | 'GridContainer'
  | 'GridRow'
  | 'GridColumn'
  | 'GridItem'
  | 'GridArea';

export type FlexComponents = 
  | 'Flex'
  | 'FlexContainer'
  | 'FlexRow'
  | 'FlexColumn'
  | 'FlexItem';

export type SpacingComponents = 
  | 'Spacer'
  | 'SpacerHorizontal'
  | 'SpacerVertical'
  | 'Divider'
  | 'DividerVertical'
  | 'DividerHorizontal';

// Navigation Types
export type NavigationComponents = 
  | 'Navigation'
  | 'NavigationBar'
  | 'NavigationContainer'
  | 'NavigationWrapper'
  | 'NavigationItem'
  | 'NavigationLink'
  | 'NavigationButton'
  | 'NavigationIcon'
  | 'NavigationText'
  | 'NavigationMobile'
  | 'NavigationDesktop'
  | 'NavigationTablet'
  | 'NavigationResponsive';

export type MenuComponents = 
  | 'Menu'
  | 'MenuContainer'
  | 'MenuItem'
  | 'MenuButton'
  | 'MenuLink'
  | 'MenuDropdown'
  | 'MenuExpanded'
  | 'MenuCollapsed';

export type BreadcrumbComponents = 
  | 'Breadcrumb'
  | 'BreadcrumbItem'
  | 'BreadcrumbSeparator'
  | 'BreadcrumbLink';

// Header Types
export type HeaderComponents = 
  | 'Header'
  | 'HeaderContainer'
  | 'HeaderWrapper'
  | 'HeaderFixed'
  | 'HeaderSticky'
  | 'HeaderLogo'
  | 'HeaderTitle'
  | 'HeaderNav'
  | 'HeaderActions'
  | 'HeaderSearch'
  | 'HeaderProfile'
  | 'HeaderMenu';

// Content Types
export type PageComponents = 
  | 'Page'
  | 'PageContainer'
  | 'PageWrapper'
  | 'PageContent'
  | 'PageSection';

export type ContentComponents = 
  | 'Content'
  | 'ContentBlock'
  | 'ContentSection'
  | 'ContentArea'
  | 'ContentWrapper';

export type CardComponents = 
  | 'Card'
  | 'CardContainer'
  | 'CardHeader'
  | 'CardBody'
  | 'CardFooter'
  | 'CardImage'
  | 'CardTitle'
  | 'CardAction';

export type ListComponents = 
  | 'List'
  | 'ListContainer'
  | 'ListItem'
  | 'ListHeader'
  | 'ListFooter'
  | 'ListAction';

// Interactive Types
export type ButtonComponents = 
  | 'Button'
  | 'ButtonPrimary'
  | 'ButtonSecondary'
  | 'ButtonOutline'
  | 'ButtonText'
  | 'ButtonIcon'
  | 'ButtonGroup'
  | 'ButtonContainer';

export type LinkComponents = 
  | 'Link'
  | 'LinkButton'
  | 'LinkIcon'
  | 'LinkText'
  | 'LinkExternal'
  | 'LinkInternal';

export type FormComponents = 
  | 'Form'
  | 'FormContainer'
  | 'FormGroup'
  | 'FormSection'
  | 'FormRow'
  | 'FormField'
  | 'FormLabel'
  | 'FormInput'
  | 'FormTextarea'
  | 'FormSelect'
  | 'FormCheckbox'
  | 'FormRadio'
  | 'FormSwitch'
  | 'FormValidation'
  | 'FormError'
  | 'FormSuccess';

// State Types
export type LoadingComponents = 
  | 'Loading'
  | 'LoadingSpinner'
  | 'LoadingDots'
  | 'LoadingBar'
  | 'LoadingOverlay'
  | 'LoadingSkeleton';

export type ErrorComponents = 
  | 'Error'
  | 'ErrorBoundary'
  | 'ErrorMessage'
  | 'ErrorAlert'
  | 'ErrorFallback';

export type StatusComponents = 
  | 'Status'
  | 'StatusIndicator'
  | 'StatusBadge'
  | 'StatusMessage'
  | 'StatusIcon';

// UI Element Types
export type ModalComponents = 
  | 'Modal'
  | 'ModalContainer'
  | 'ModalHeader'
  | 'ModalBody'
  | 'ModalFooter'
  | 'ModalOverlay'
  | 'ModalClose';

export type TooltipComponents = 
  | 'Tooltip'
  | 'TooltipContent'
  | 'TooltipTrigger'
  | 'TooltipArrow';

export type PopoverComponents = 
  | 'Popover'
  | 'PopoverContent'
  | 'PopoverTrigger'
  | 'PopoverHeader'
  | 'PopoverBody';

export type AlertComponents = 
  | 'Alert'
  | 'AlertSuccess'
  | 'AlertError'
  | 'AlertWarning'
  | 'AlertInfo';

// Media Types
export type ImageComponents = 
  | 'Image'
  | 'ImageContainer'
  | 'ImageWrapper'
  | 'ImageOverlay'
  | 'ImageCaption'
  | 'ImageGallery';

export type VideoComponents = 
  | 'Video'
  | 'VideoPlayer'
  | 'VideoContainer'
  | 'VideoControls'
  | 'VideoOverlay';

export type IconComponents = 
  | 'Icon'
  | 'IconButton'
  | 'IconContainer'
  | 'IconWrapper'
  | 'IconStack';

// Typography Types
export type TextComponents = 
  | 'Text'
  | 'TextBlock'
  | 'TextContent'
  | 'TextWrapper';

export type HeadingComponents = 
  | 'Heading'
  | 'HeadingLarge'
  | 'HeadingMedium'
  | 'HeadingSmall';

export type ParagraphComponents = 
  | 'Paragraph'
  | 'ParagraphLead'
  | 'ParagraphBody'
  | 'ParagraphSmall';

// Utility Types
export type ProviderComponents = 
  | 'Provider'
  | 'ProviderContext'
  | 'ProviderTheme'
  | 'ProviderAuth';

export type PortalComponents = 
  | 'Portal'
  | 'PortalContainer'
  | 'PortalOverlay'
  | 'PortalModal';

export type TransitionComponents = 
  | 'Transition'
  | 'TransitionGroup'
  | 'TransitionFade'
  | 'TransitionSlide';

// Size Variants
export type SizeVariants = 
  | 'ComponentSmall'
  | 'ComponentMedium'
  | 'ComponentLarge'
  | 'ComponentFull';

// State Variants
export type StateVariants = 
  | 'ComponentActive'
  | 'ComponentInactive'
  | 'ComponentDisabled'
  | 'ComponentLoading'
  | 'ComponentError'
  | 'ComponentSuccess';

// Combined Type for All Components
export type AllComponents = 
  | LayoutComponents
  | ContainerComponents
  | GridComponents
  | FlexComponents
  | SpacingComponents
  | NavigationComponents
  | MenuComponents
  | BreadcrumbComponents
  | HeaderComponents
  | PageComponents
  | ContentComponents
  | CardComponents
  | ListComponents
  | ButtonComponents
  | LinkComponents
  | FormComponents
  | LoadingComponents
  | ErrorComponents
  | StatusComponents
  | ModalComponents
  | TooltipComponents
  | PopoverComponents
  | AlertComponents
  | ImageComponents
  | VideoComponents
  | IconComponents
  | TextComponents
  | HeadingComponents
  | ParagraphComponents
  | ProviderComponents
  | PortalComponents
  | TransitionComponents
  | SizeVariants
  | StateVariants; 