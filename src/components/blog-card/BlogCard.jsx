/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImage from '../../assets/images/404.jpg';

const BlogCard = ({ blog }) => {
  const { published_at, cover_image, title, description, id } = blog;
  return (
    <Link
      to={`/blogs/${id}`}
      rel="noopener noreferrer"
      className="max-w-sm mx-auto p-4 transition border-2 border-primary hover:border-secondary border-opacity-30 hover:scale-105 group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
      <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImage} />
      <div className="space-y-2 mt-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
        <span className="text-sm text-gray-400 dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
        <p className="font-medium ">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
