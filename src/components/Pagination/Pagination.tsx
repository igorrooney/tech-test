import { Table } from "@tanstack/react-table";
import { Box, Text } from "@chakra-ui/react";
// Utils
import { FormatItemType } from "@/utils/formatData";
// Icons
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

type PaginationProps = {
  data: FormatItemType[];
  table: Table<any>;
}

const Pagination: React.FC<PaginationProps> = ({ data, table }) => {

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      marginTop="14px"
    >
      <Box>Total count: {data.length}</Box>
      <Box
        display="flex"
      >
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowBackIcon fontSize="14px" />
        </button>
        <Text
          fontSize="14px"
          padding="5px"
        >
          Page{' '}
          {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}

        </Text>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ArrowForwardIcon fontSize="14px" />
        </button>
      </Box>
      <select
        value={table.getState().pagination.pageSize}
        onChange={e => {
          table.setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Per page: {pageSize}
          </option>
        ))}
      </select>
    </Box>
  )
};

export default Pagination;
