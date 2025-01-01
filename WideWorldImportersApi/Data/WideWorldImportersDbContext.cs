using Microsoft.EntityFrameworkCore;
using WideWorldImportersApi.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace WideWorldImportersApi.Data
{
    public class WideWorldImportersDbContext : DbContext
    {
        public WideWorldImportersDbContext(DbContextOptions<WideWorldImportersDbContext> options) : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().ToTable("Customers", schema: "Sales");
            base.OnModelCreating(modelBuilder);
        }
    }
}
