import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import Text "mo:core/Text";

actor {
  type Inquiry = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Nat.compare(inquiry1.id, inquiry2.id);
    };
  };

  let inquiries = Map.empty<Nat, Inquiry>();
  var nextId = 0;

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, email : Text, message : Text) : async Bool {
    if (name == "" or phone == "" or email == "" or message == "") {
      Runtime.trap("All fields are required!");
    };

    let inquiry : Inquiry = {
      id = nextId;
      name;
      phone;
      email;
      message;
      timestamp = Time.now();
    };

    inquiries.add(nextId, inquiry);
    nextId += 1;
    true;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };

  public query ({ caller }) func getInquiryCount() : async Nat {
    inquiries.size();
  };
};
