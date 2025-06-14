import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

const ListPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href='#'
            onClick={(e) => {
              e.preventDefault()
              if (currentPage > 1) onPageChange(currentPage - 1)
            }}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {totalPages <= 7 ? (
          Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                href='#'
                isActive={currentPage === i + 1}
                onClick={(e) => {
                  e.preventDefault()
                  onPageChange(i + 1)
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))
        ) : (
          <>
            {/* Always show the first page */}
            <PaginationItem>
              <PaginationLink
                href='#'
                isActive={currentPage === 1}
                onClick={(e) => {
                  e.preventDefault()
                  onPageChange(1)
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>

            {/* Show ellipsis if needed before current page */}
            {currentPage > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Show current page if it's not first or last */}
            {currentPage !== 1 && currentPage !== totalPages && (
              <PaginationItem>
                <PaginationLink
                  href='#'
                  isActive={true}
                  onClick={(e) => {
                    e.preventDefault()
                    onPageChange(currentPage)
                  }}
                >
                  {currentPage}
                </PaginationLink>
              </PaginationItem>
            )}

            {/* Show ellipsis if needed after current page */}
            {currentPage < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Always show the last page */}
            {totalPages > 1 && (
              <PaginationItem>
                <PaginationLink
                  href='#'
                  isActive={currentPage === totalPages}
                  onClick={(e) => {
                    e.preventDefault()
                    onPageChange(totalPages)
                  }}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}
          </>
        )}
        <PaginationItem>
          <PaginationNext
            href='#'
            onClick={(e) => {
              e.preventDefault()
              if (currentPage < totalPages) onPageChange(currentPage + 1)
            }}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default ListPagination
