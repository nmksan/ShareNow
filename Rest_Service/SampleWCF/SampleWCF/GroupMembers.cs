using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SampleWCF
{
    public class GroupMembers
    {
        public string GroupName { get; set; }
        public List<Members> members { get; set; }
    }
}