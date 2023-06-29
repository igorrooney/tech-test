import { IphoneIcon } from "@/icons/IphoneIcon"
import { FormatItemType } from "@/utils/formatData"
import { formatDate } from "@/utils/formatDate"
import { Box } from "@chakra-ui/react"
import { createColumnHelper } from "@tanstack/react-table"

export const useColumns = () => {
  const columnHelper = createColumnHelper<FormatItemType>()

  const renderDOBCell = (row: FormatItemType) => {
    return row.dob && formatDate(row.dob)
  }

  const renderTagsCell = (row: FormatItemType) => {
    const allTags = row.tags
    return (
      <Box display="flex" flexDirection="column" gap="4px">
        {
          allTags.map(tag => (
            <Box 
              key={tag} 
              color="#4E5861" 
              width="max-content" 
              border="1px solid #4E5861" 
              borderRadius="200px" 
              padding="0px 6px" 
              textAlign="center"
            >
              {tag}
            </Box>
          ))
        }
      </Box>
    )
  }

  const columns = [
    columnHelper.accessor(() => null, {
      id: 'icon',
      cell: ({ row }) => <IphoneIcon active={!row.original.disabled} />,
      header: () => null,
    }),
    columnHelper.accessor('firstName', {
      id: 'firstName',
      header: () => 'First Name',
      cell: (info) => info.getValue(),
      size: 315
    }),
    columnHelper.accessor('lastName', {
      id: 'lastName',
      header: () => 'Last Name',
      size: 206
    }),
    columnHelper.accessor(row => renderDOBCell(row), {
      id: 'dob',
      header: () => 'DOB',
      size: 462
    }),
    columnHelper.accessor('gender', {
      id: 'gender',
      header: () => 'Gender',
    }),
    columnHelper.accessor('mobile', {
      id: 'mobile',
      header: () => 'Mobile',
    }),
    columnHelper.accessor('email', {
      id: 'email',
      header: () => 'Email'
    }),
    columnHelper.accessor('city', {
      id: 'city',
      header: () => 'City'
    }),
    columnHelper.accessor('postCode', {
      id: 'postCode',
      header: () => 'Post Code'
    }),
    columnHelper.accessor('street', {
      id: 'street',
      header: () => 'Street',
      size: 832
    }),
    columnHelper.accessor('pmi', {
      id: 'pmi',
      header: () => 'PMI #'
    }),
    columnHelper.accessor('nhs', {
      id: 'nhs',
      header: () => 'NHS ID',
      size: 232
    }),
    columnHelper.accessor(() => null, {
      id: 'tags',
      cell: ({row}) => renderTagsCell(row.original),
      header: () => 'Tags'
    }),
  ]

  return columns
}