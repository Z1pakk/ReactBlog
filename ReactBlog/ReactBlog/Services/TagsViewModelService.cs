using ReactBlog.Core.Entities;
using ReactBlog.Core.Interfaces;
using ReactBlog.Core.Specifications;
using ReactBlog.Interfaces;
using ReactBlog.ViewModels.Tags;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.Services
{
    public class TagsViewModelService : ITagsViewModelService
    {
        private readonly IAsyncRepository<Tag> _tagsRepository;

        public TagsViewModelService(IAsyncRepository<Tag> tagsRepository)
        {
            _tagsRepository = tagsRepository;
        }
        public async Task<TagsViewModel> GetTags(string searchText="",int page = 1, int itemsPage = 8)
        {
            var topSpecififcation = new TopTagsSpecification(searchText,page,itemsPage);

            var items = await _tagsRepository.ListAsync(topSpecififcation);
            topSpecififcation = new TopTagsSpecification(searchText, page+1, itemsPage);
            bool isHasNext = await _tagsRepository.CountAsync(topSpecififcation) > 0 ? true : false;
            return new TagsViewModel() { Items = convertPosts(items), IsHasNext = isHasNext };
        }

        public async Task<TagDetailedViewModel> Tag(string tagName)
        {
            var tag = await _tagsRepository.ListAllAsync();
            var tempmodel = tag.FirstOrDefault(t => t.Name == tagName);
            TagDetailedViewModel model = new TagDetailedViewModel()
            {
                Id = tempmodel.Id,
                Name = tempmodel.Name,
                CountPosts = tempmodel.TagPosts.Count,
                Description = tempmodel.Description,
                Image=tempmodel.Image
                
            };
            return model;
        }

        private IEnumerable<TagItemViewModel> convertPosts(IReadOnlyList<Tag> items)
        {
            return items.Select(i => new TagItemViewModel()
            {
                Id=i.Id,
                Description=i.Description,
                Image=i.Image,
                Name=i.Name
            }).ToList();
        }
    }
}
