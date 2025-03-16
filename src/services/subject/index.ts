export const getAllSubjects = async () => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/subjects`);
    return result.json();
  } catch (error) {
    console.log(error);
  }
};
