//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class userdetail
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public userdetail()
        {
            this.payments = new HashSet<payment>();
            this.shareamounts = new HashSet<shareamount>();
        }
    
        public int id { get; set; }
        public Nullable<int> groupid { get; set; }
        public string fullname { get; set; }
        public string phoneno { get; set; }
        public string emailid { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    
        public virtual groupdetail groupdetail { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<payment> payments { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<shareamount> shareamounts { get; set; }
    }
}