﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SampleWCF
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class sharenowdbEntities : DbContext
    {
        public sharenowdbEntities()
            : base("name=sharenowdbEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<groupdetail> groupdetails { get; set; }
        public virtual DbSet<payment> payments { get; set; }
        public virtual DbSet<shareamount> shareamounts { get; set; }
        public virtual DbSet<userdetail> userdetails { get; set; }
        public virtual DbSet<user> users { get; set; }
    }
}