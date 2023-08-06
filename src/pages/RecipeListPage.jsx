import { SimpleGrid, Text, Center, Heading, Image, Box, Card, CardFooter } from "@chakra-ui/react";
import { data } from '../utils/data';
import { useState } from 'react';

export const RecipeListPage = ({ props }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  //console.log(data.hits[0].recipe.label);
  const [searchInput, setsearchInput] = useState("");
  //console.log(data.hits)
  const handleSearch = (event) => {
    setsearchInput(event.target.value);
  };

  const filteredHits = data.hits.filter((hit) => {
    const { recipe } = hit;
    const { label, healthLabels } = recipe;
    const labelSearch = label.toLowerCase();
    const searchForm = searchInput.toLowerCase();

    return (
      labelSearch.includes(searchForm) ||
      healthLabels.some((label) =>
        label.toLowerCase().includes(searchForm)
      )
    );
  });

  return (
    <SimpleGrid>
      <Heading  p={10} textAlign="center" color="rgb(157 23 77)">
        <Text ml={30}>Welkom in mijn Recepten App</Text>
      </Heading>
      {filteredHits.length === 0 && (
        <Text color="rgb(80 7 36)" textAlign="center" mb={20} fontSize={40}>
          Geen recepten gevonden! Please Check again!
        </Text>
      )}
      <div>
        <Center ml={50} mb={10} color="rgb(80 7 36)" >
          <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearch}
          />
        </Center>
      </div>
      <SimpleGrid columns={4} p={8} spacing={8} minChildWidth={350} ml={30} mr={30}>
        {filteredHits.map((hit) => {
          const { recipe } = hit;
          const {
            label,
            image,
            dietLabels,
            cautions,
            mealType,
            dishType,
            healthLabels,
          } = recipe;
 
          return (
            <Card
            maxW={400}
              gap={3}
              borderRadius={15}
              overflow="hidden"
              textAlign="center"
              bg="rgb(80 7 36)"
              color="rgb(252 231 243)"
              key={label}
              onClick={() => props(label)}
              >
              <Image src={image} alt={label} h={350} objectFit="center"/>
              <Heading as="h2" size="lg" pl={10} pr={10}>
                {label}
              </Heading>
              {dietLabels.length > 0 && (
                <Box bg="rgb(249 168 212)" color="rgb(80 7 36)" >
                  <strong>Diet:</strong> {dietLabels.join(", ")}
                </Box>
              )}
              {cautions.length > 0 && (
                <Box >
                  <strong>Cautions:</strong> {cautions.join(", ")}
                </Box>
              )}
              <Box >
                <strong>Meal Type:</strong> {mealType.join(", ")}
              </Box>
              <Box >
                <strong>Dish Type:</strong> {dishType.join(", ")}
              </Box>
              <CardFooter>
                {healthLabels.includes("Vegan") && (
                  <Box bg="rgb(232 121 249)">
                    Vegan
                  </Box>
                )}
                {healthLabels.includes("Vegetarian") && (
                  <Box bg="rgb(232 121 249)" textAlign="center">
                    Vegetarian
                  </Box>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </SimpleGrid>
  );
};