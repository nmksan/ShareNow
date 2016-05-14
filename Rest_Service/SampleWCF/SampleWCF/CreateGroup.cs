using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SampleWCF
{
    public class CreateGroup
    {
        public string GroupName { get; set; }

        public List<GroupMembers> GroupMembers { get; set; }
    }
}