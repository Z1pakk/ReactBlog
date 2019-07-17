using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactBlog.Core.Email
{
    public class EmailTemplateData
    {
        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("content1")]
        public string Content1 { get; set; }

        [JsonProperty("link")]
        public string Link { get; set; }

        [JsonProperty("buttonText")]
        public string ButtonText { get; set; }

        [JsonProperty("content2")]
        public string Content2 { get; set; }

        [JsonProperty("company")]
        public string Company { get; set; }

        [JsonProperty("footer")]
        public string Footer { get; set; }

    }
}
