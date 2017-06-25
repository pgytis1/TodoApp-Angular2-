using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Angular2Projects.Models;

namespace Angular2Projects.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20170605165221_addTodoTable")]
    partial class addTodoTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Angular2Projects.Models.Todo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsCompleted");

                    b.Property<string>("Text");

                    b.HasKey("Id");

                    b.ToTable("Todos");
                });
        }
    }
}
