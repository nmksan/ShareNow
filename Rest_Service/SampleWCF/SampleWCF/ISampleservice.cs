using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace SampleWCF
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "ISampleservice" in both code and config file together.
    [ServiceContract]
    public interface ISampleservice
    {

        //[OperationContract]
        //[WebInvoke(Method = "GET", UriTemplate = "/login/{username}/{password}", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        //Login Login(string userName, string password);

        //[OperationContract]
        //[WebInvoke(Method = "POST", UriTemplate = "/signup", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        //void SignUp(Customer userDetails);


        //[OperationContract]
        //[WebInvoke(Method = "GET", UriTemplate = "/onloadmembers", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        //Members OnloadMembers();



        //[OperationContract]
        //[WebInvoke(Method = "GET", UriTemplate = "/onloadgroupmembers", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        //Members OnloadGroupMembers();


        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/creategroup", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        string[] creategroup();


        //[OperationContract]
        //[WebInvoke(Method = "POST", UriTemplate = "/payment/{name}/{amount}", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        //void Payment(string Name,string Amount);


        //[OperationContract]
        //[WebInvoke(Method = "POST", UriTemplate = "/shareamount", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        //void ShareAmount(CreateGroup AmountDetails);
    }
    [DataContract]
    public class member
    {
        [DataMember]
        public string name { get; set; }
    }



    [DataContract]
    public class Customer
    {
        [DataMember]
        public int id { get; set; }
        [DataMember]
        public string name { get; set; }
        [DataMember]
        public string emailid { get; set; }
        [DataMember]
        public string phoneno { get; set; }
        [DataMember]
        public string username { get; set; }
    }
}
