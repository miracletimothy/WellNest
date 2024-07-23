import ContentCategory from "../../../models/ContentCategory";

export const getCategories = async (req: any, res: any) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(403).json({ msg: "Unauthorized" });
    }
    const categories = await ContentCategory.find();

    if (!categories) {
      return res.status(404).json({ msg: "categories not found" });
    }

    res.json(categories);
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send("Server Error");
  }
};
