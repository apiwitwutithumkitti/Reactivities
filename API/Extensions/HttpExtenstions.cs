using System.Text.Json;
using Microsoft.AspNetCore.Http;

namespace API.Extensions
{
    public static class HttpExtenstions
    {
        public static void AddPaginationHeader(this HttpResponse response, int currentPage, 
            int itemsPerPage, int totalItems, int totalPages)
        {
            var paginationHeader = new 
            {
                currentPage,
                itemsPerPage,
                totalItems,
                totalPages
            };
            response.Headers.Add("Pagination", JsonSerializer.Serialize(paginationHeader));
        }
    }
}