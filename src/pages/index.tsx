import { useState } from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from '@next/font/google';
// Hooks
import { useFetchData } from '@/hooks/useFetchData';
import { useColumns } from '@/components/ChakraTable/useColumns';
// Components
import ChakraTable from '@/components/ChakraTable';
// Utils
import { formatData, FormatItemType } from '@/utils/formatData';
// Icons
import { UsersIcon } from '@/icons/UsersIcon';

const inter = Inter({ subsets: ['latin'] })

const theme = {
  styles: {
    global: {
      'html, body': {
        fontFamily: inter.style.fontFamily,
        color: '#33404A',
        fontSize: '12px'
      },
    },
  },
}


const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {data, error, isLoading } = useFetchData();
  const formattedData = formatData(data) as FormatItemType[];

  const columns = useColumns();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error has occurred: {error.message}</p>;
  }
  if (!data) {
    return null;
  }

  return (
    <ChakraProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        padding="48px 108px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          margin="16px"
        >
          <Box
            display="flex"
            gap="8px"
          >
            <UsersIcon />
            <Text
              fontSize="24px"
              fontWeight="700"
              lineHeight="28.8px"
            >
              My Team
            </Text>
          </Box>
          <Input
            width="709px"
            height="40px"
            border="1px solid #D9E2EA"
            borderRadius="8px"
            padding="10px"
            placeholder='Search'
            value={searchQuery}
            onChange={val => setSearchQuery(val.target.value)}
          />
          <Box
            display="flex" 
            gap="16px" 
          >
            <Button 
              color="#FFFF"
              backgroundColor="#0021FF"
              borderRadius="8px"
              padding="7px"
              fontSize="16px"
              width="80px"
              height="32px"
            >
              + Add
            </Button>
            <Button 
              color="#0021FF"
              backgroundColor="#FFFF"
              borderRadius="8px"
              padding="7px"
              fontSize="16px"
              width="80px"
              height="32px"
            >
              Filter
            </Button>
          </Box>
        </Box>
          <ChakraTable 
            columns={columns} 
            data={formattedData}
            globalFilter={searchQuery}
            setGlobalFilter={setSearchQuery}
          />
      </Box>
    </ChakraProvider>
  )
}
  
  export default Home;
