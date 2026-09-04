namespace BikersArena.Models
{
    public class Product
    {
        public int pk_pro_id { get; set; }

        public string prod_name { get; set; }

        public int prod_cat_id { get; set; }

        public string prod_desc { get; set; }

        public decimal prod_price { get; set; }

        public string prod_image_url { get; set; }

        public double prod_rating { get; set; }

        public int prod_review_count { get; set; }
    }
}
