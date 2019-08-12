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
            bool isHasNext = await _tagsRepository.CountAsync(topSpecififcation) >= ((page - 1) * itemsPage) ? true : false;
            return new TagsViewModel() { Items = convertPosts(items), IsHasNext = isHasNext };
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
