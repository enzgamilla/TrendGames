import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle />
      <SkeletonText />
    </HStack>
  );
};

export default GenreListSkeleton;
