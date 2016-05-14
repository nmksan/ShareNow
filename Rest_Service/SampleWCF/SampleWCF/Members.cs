using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SampleWCF
{
    public class Members
    {
        public string name { get; set; }
        public int id { get; set; }
    }

    public class simple
    {
        public string name { get; set; }
        public simple(string name)
        {
            this.name = name;
            
        }
    }
}