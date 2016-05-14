using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace SampleWCF
{
    [DataContract]
    public class Login
    {
        [DataMember]
        public int id { get; set; }
        [DataMember]
        public string name { get; set; }
        [DataMember]
        public string EmailId { get; set; }
        [DataMember]
        public string PhoneNo { get; set; }
        [DataMember]
        public string GroupName { get; set; }
        [DataMember]
        public string UserName { get; set; }

    }
}