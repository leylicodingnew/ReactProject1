import { Button, HStack, Heading, VStack, Image, Box } from "@chakra-ui/react"

export const RecipePage = ({ hits, onClick }) => {

  const {
    label,
    image,
    mealType,
    dishType,
    totalTime,
    dietLabels,
    healthLabels,
    cautions,
    ingredientLines,
    totalNutrients,
  } = hits;

  const nutrients = {
    kcal: Math.round(totalNutrients.ENERC_KCAL.quantity),
    protein: Math.round(totalNutrients.PROCNT.quantity),
    fat: Math.round(totalNutrients.FAT.quantity),
    carbs: Math.round(totalNutrients.CHOCDF.quantity),
    cholesterol: Math.round(totalNutrients.CHOLE.quantity),
    sodium: Math.round(totalNutrients.NA.quantity),
  };

  return (
    <>
      <VStack pt="30px" pb="30px" bg="rgb(80 7 36)" maxWidth={1000}>
      <div style={{width: "100%" ,padding:"40px"}}>
        <Button onClick={onClick} color="rgb(76 5 25)" bg= 'rgb(255 228 230)' border={20} mb={4}>
        Back
      </Button>
      <div>
        <Image src={image} alt={label} h={500} w="80%" objectFit="center" />
        <Heading paddingLeft="30px"  as='h2'  m={10} color="rgb(252 231 243)">
          {label}
        </Heading>
      </div>
     
      <HStack>
        <VStack pb='20px' color="rgb(251 113 133)">
      <div>
        <Heading as='h4' m={0}>
          Meal Type:
        </Heading>
        <div style={{ fontSize:'15px'}}>{mealType.join(', ')}</div>
      </div>
      <div>
        <Heading as='h4' m={0} color="rgb(254 205 211)">
          Dish Type:
        </Heading>
        <div style={{ fontSize:'15px' }}>{dishType.join(', ')}</div>
      </div>
      <div style={{ paddingLeft:'30px' }}>
        <Heading as='h4'  m={0} color="rgb(254 205 211)">
          Total Cooking Time:
        </Heading>
        <div style={{ fontSize:'15px'}}>{totalTime} minutes</div>
      </div>
      {dietLabels.length > 0 && (
        <div>
          <Heading as='h4'  m={0} color="rgb(254 205 211)">
            Diet Label:
          </Heading>
          <div style={{ fontSize:'15px' }}>{dietLabels.join(', ')}</div>
        </div>
      )}

{cautions.length > 0 && (
        <div>
          <Heading as='h4'  mb={0}>
            Cautions:
          </Heading>
          <div style={{ fontSize:'15px' , backgroundColor:" pink" }}>{cautions.join(', ')}</div>
        </div>
      )}
      </VStack  >
      <HStack >
  <div  style={{ paddingLeft: '100px' }}>
    <Heading as="h4" mb={2} color="rgb(251 113 133)">
      Health Labels:
    </Heading>
    <div spacing={2}>
      {healthLabels.map((label) => (
        <div key={label}>
          <div style={{ fontSize: '15px',color:"rgb(254 205 211)"}}>{label}</div>
        </div>
      ))}
    </div>
  </div>
</HStack>

      </HStack>
<HStack paddingBottom= "10px" paddingLeft="20px" color="rgb(251 113 133)">
      <div >
        <Heading as='h4' m={0}>
          Ingredients:
        </Heading>
        <div>
          {ingredientLines.map((line, index) => (
            <div key={index}>
              <div style={{ fontSize:'15px'}}>{line}</div>
            </div>
          ))}
        </div>
      </div>

      
        
      
      <div  style={{ paddingLeft:"30px" }}>
        <Heading as='h4'  mb={0} textAlign="center" color="rgb(254 205 211)">
          Nutrients:
        </Heading>
        <Box fontSize={15} color="rgb(254 205 211)">
        <div>Energy: {nutrients.kcal} kcal</div>
        <div>Protein: {nutrients.protein} g</div>
        <div>Fat: {nutrients.fat} g</div>
        <div>Carbs: {nutrients.carbs} g</div>
        <div>Cholesterol: {nutrients.cholesterol} mg</div>
        <div>Sodium: {nutrients.sodium} mg</div>
        </Box>
      </div>
      
      </HStack>
      </div>
     </VStack>
    </>
  )
}