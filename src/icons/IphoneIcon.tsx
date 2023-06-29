import { Icon } from "@chakra-ui/react";

type IphoneIcon = {
  active?: boolean;
}

export const IphoneIcon: React.FC<IphoneIcon> = ({ active }) => (
  <Icon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M11.3334 1.33331H4.66669C4.1144 1.33331 3.66669 1.78103 3.66669 2.33331V13.6666C3.66669 14.2189 4.1144 14.6666 4.66669 14.6666H11.3334C11.8856 14.6666 12.3334 14.2189 12.3334 13.6666V2.33331C12.3334 1.78103 11.8856 1.33331 11.3334 1.33331Z" 
      stroke={active ? "#0021FF" : "#B6B6B6"} />
    <path 
      d="M7.33335 3.33331H8.66669M6.66669 12.6666H9.33335" 
      stroke={active ? "#0021FF" : "#B6B6B6"} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </Icon>
)
