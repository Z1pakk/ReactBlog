
using Ardalis.GuardClauses;
using System;
using System.Collections.Generic;

namespace ReactBlog.Core.Entities.UserAggregate
{
    public class User:BaseEntity
    {
        public string IdentityGuid { get; private set; }

        public string FirstName { get; private set; }

        public string LastName { get; private set; }

        public DateTimeOffset CreatedDate { get; private set; } = DateTimeOffset.Now;

        public bool IsPromotions { get; private set; }

        private User()
        {

        }
        public User(string identity,string firstName,string lastName,bool isPromotions) : this()
        {
            Guard.Against.NullOrEmpty(identity, nameof(identity));
            this.IdentityGuid = identity;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.IsPromotions = isPromotions;
        }
    }
}
