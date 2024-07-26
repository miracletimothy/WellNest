import { Request, Response } from "express";
import Content, { IContent } from "../../../models/contentModel";

interface getRequest {
  category: string;
  type: string;
}

export const createContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { type, title, description, tags, links } = req.body;
  let fileUrl: string | null = null;
  if (req.file) {
    fileUrl = req.file.path; // This assumes you're using a middleware like multer for file handling
  }

  try {
    const newContent: IContent = new Content({
      type,
      title,
      description,
      tags: JSON.parse(tags),
      links: JSON.parse(links),
      file: fileUrl,
    });

    const savedContent = await newContent.save();
    res.status(201).json(savedContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating content" });
  }
};

export const getContentByCategoryAndType = async (
  req: Request,
  res: Response
) => {
  try {
    const { category, type } = req.query;

    if (!category || typeof category !== "string") {
      return res
        .status(400)
        .json({ message: "Category is required and must be a string" });
    }

    const categoryTags = category.split("-").map((tag) => tag.trim());
    console.log("categoryTags:", categoryTags);

    // const content = await Content.find({ tags: { $in: categoryTags }, type });
    // console.log('category:', category, '\n', 'content:', content, '\n');
    const allContent = await Content.find({ type });

    const filterContent = allContent.filter((content) => {
      const contentTags = content.tags.flatMap((tag) =>
        tag.split(" ").map((t) => t.toLowerCase())
      );
      return categoryTags.some((categoryTag) =>
        contentTags.includes(categoryTag)
      );
    });

    console.log("category:", category, "\n", "content:", filterContent, "\n");
    res.status(200).json(filterContent);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
