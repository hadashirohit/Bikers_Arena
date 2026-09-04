using BikersArena.Models;
using System.Data;
using Microsoft.Data.SqlClient;

namespace BikersArena.Repository
{
    public class ProductRepository
    {
        private readonly IConfiguration _configuration;

        public ProductRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public List<Product> GetProducts(
            int? categoryId,
            int pageNumber,
            int pageSize)
        {
            List<Product> products = new List<Product>();

            string connectionString =
                _configuration.GetConnectionString("DefaultConnection");

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("sp_GetProducts", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue(
                        "@CategoryId",
                        (object?)categoryId ?? DBNull.Value);

                    cmd.Parameters.AddWithValue(
                        "@PageNumber",
                        pageNumber);

                    cmd.Parameters.AddWithValue(
                        "@PageSize",
                        pageSize);

                    con.Open();

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Product product = new Product();

                            product.pk_pro_id =
                                Convert.ToInt32(reader["pk_pro_id"]);

                            product.prod_name =
                                reader["prod_name"].ToString();

                            product.prod_cat_id =
                                Convert.ToInt32(reader["prod_cat_id"]);

                            product.prod_desc =
                                reader["prod_desc"].ToString();

                            product.prod_price =
                                Convert.ToDecimal(reader["prod_price"]);

                            product.prod_image_url =
                                reader["prod_image_url"].ToString();

                            product.prod_rating =
                                Convert.ToDouble(reader["prod_rating"]);

                            product.prod_review_count =
                                Convert.ToInt32(reader["prod_review_count"]);

                            products.Add(product);
                        }
                    }
                }
            }

            return products;
        }
    }
}
