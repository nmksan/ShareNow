using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.ServiceModel;
using System.Text;

namespace SampleWCF
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Sampleservice" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Sampleservice.svc or Sampleservice.svc.cs at the Solution Explorer and start debugging.
    public class Sampleservice : ISampleservice
    {
        //public Login Login(string userName, string password)
        //{
        //    Login user = new Login();
        //    //List<Customer> lstcust = new List<Customer>();
        //    using (sharenowdbEntities db = new sharenowdbEntities())
        //    {
        //        //var query = (from data in db.usertable1 select data).ToList();


        //        var query = db.userdetails.Where(x => x.username == userName && x.password == password).SingleOrDefault();
        //        var query1 = db.groupdetails.Where(y => y.id == query.groupid).SingleOrDefault();
        //        if (query != null)
        //        {
        //            user.name = query.fullname;
        //            user.EmailId = query.emailid;
        //            user.id = query.id;
        //            user.PhoneNo = query.phoneno;
        //            user.UserName = query.username;
        //            user.GroupName = query1.name;
        //        }
        //        else
        //        {
                   
        //        }
        //    }
        //    //write database related data retrival logic here.
        //    return user; 

        //}


        //public void SignUp(Customer userDetails)
        //{

        //}


        public string[] creategroup()
        {
            string[] arr4 = new string[3];
            arr4[0] = "one";
            arr4[1] = "two";
            arr4[2] = "three";

            return arr4;

        }

        //public void Payment(string Name, string Amount)
        //{
        //    using (sharenowdbEntities1 db = new sharenowdbEntities1())
        //    {
        //        payment td = new payment();
        //        var query = db.userdetails.Where(x => x.username == Name).SingleOrDefault(); 

        //        td.amount = Amount;
        //        td.userid = query.id;
        //        db.payments.Add(td);
        //        db.SaveChanges();
        //    }

        //}

        //public void ShareAmount(CreateGroup AmountDetails)
        //{
        //    throw new NotImplementedException();
        //}



        //public Members OnloadMembers()
        //{
        //    Members members = new Members();
        //    using (sharenowdbEntities db = new sharenowdbEntities())
        //    {
        //        var query = from row in db.userdetails select row;
        //        foreach(var user in query)
        //        {
        //            members.name = user.username;
        //            members.id = user.id;
        //        }
        //    }
        //    return members;
        //}

        //public Members OnloadGroupMembers()
        //{
        //    string groupName = "sevenstars";
        //    Members Gm = new Members();
        //    using (sharenowdbEntities db = new sharenowdbEntities())
        //    {
        //        var query = db.userdetails.Join(db.groupdetails, ud => ud.groupid, gd => gd.id, (ud, gd) => new { ud, gd })
        //            .Where(x => x.gd.name == groupName)
        //            .Select(
        //            r => new { r.ud.username,
        //            r.ud.id}
        //               );
        //    foreach(var user in query)
        //        {
        //            Gm.id = user.id;
        //            Gm.name = user.username;
        //        }


        //    }
        //    return Gm;
        //}
    }
}

