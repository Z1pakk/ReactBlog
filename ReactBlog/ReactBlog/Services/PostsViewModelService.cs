﻿using ReactBlog.Core.Entities;
using ReactBlog.Core.Interfaces;
using ReactBlog.Core.Specifications;
using ReactBlog.Interfaces;
using ReactBlog.ViewModels.Authors;
using ReactBlog.ViewModels.Posts;
using ReactBlog.ViewModels.Tags;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.Services
{
    public class PostsViewModelService : IPostsViewModelService
    {
        private readonly IAsyncRepository<Post> _postsRepository;

        public PostsViewModelService(IAsyncRepository<Post> postsRepository)
        {
            _postsRepository = postsRepository;
        }
        public async Task<IEnumerable<PostItemViewModel>> TopPosts(int itemsPage = 5)
        {
            var topSpecififcation = new TopPostsSpecification(itemsPage);

            var items = await _postsRepository.ListAsync(topSpecififcation);

            return convertPosts(items);
        }

        public async Task<PostsViewModel> MainPosts(int page=1,int countItems=8)
        {
            var mainSpecification = new MainPostsSpecification(page,countItems);

            var items = await _postsRepository.ListAsync(mainSpecification);
            bool isHasNext = await _postsRepository.CountAsync(mainSpecification) >= ((page-1) * countItems) ? true : false;
            return new PostsViewModel() { Items = convertPosts(items), IsHasNext = isHasNext };
        }

        private IEnumerable<PostItemViewModel> convertPosts(IReadOnlyList<Post> items)
        {
            return items.Select(i => new PostItemViewModel()
            {
                PostId = i.Id,
                DateOfCreate = i.DateCreate,
                Authors = i.PostAuthors.Select(
                     a => new AuthorPostItemViewModel()
                     {
                         UserName = a.AuthorOf.UserName,
                         Name = a.AuthorOf.FirstName + " " + a.AuthorOf.LastName
                     }).ToList(),
                Image = Uri.IsWellFormedUriString(i.Image, UriKind.Absolute)?i.Image:i.Image,
                Title = i.Title,
                Tags = i.TagPosts.Select(t =>
                      new TagPostItemViewModel()
                      {
                          Id = t.TagId,
                          Name = t.TagOf.Name
                      }).ToList(),
                Color=i.ColorId.HasValue?i.ColorOf.Name:null,
                IsFeatured=i.IsFeatured.HasValue&&i.IsFeatured.Value==true?true:false
            }).ToList();
        }
    }
}
