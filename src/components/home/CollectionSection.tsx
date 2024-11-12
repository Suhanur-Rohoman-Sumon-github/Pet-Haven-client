import Container from '../Container/Container';
import CollectionCard from './CollectionCard';

const CollectionSection = () => {
  return (
    <Container>
      <div className="my-[120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CollectionCard
          btnColor="bg-primary text-white"
          btnText="Shop Now"
          heading="Canine Feast"
          subheading="Nourishment for Every Adventure"
          img="https://png.pngtree.com/png-vector/20231220/ourmid/pngtree-hungry-dog-dinner-png-image_11287051.png"
        />
        <CollectionCard
          heading="Purrfect Feast"
          subheading="A Meal as Majestic as Your Feline"
          btnColor="bg-secondery text-white"
          btnText="Buy Now"
          img="https://static.vecteezy.com/system/resources/thumbnails/050/591/207/small_2x/adorable-fluffy-kitten-sitting-beside-a-bowl-of-cat-food-on-transparent-background-free-png.png"
        />
        <CollectionCard
          heading="FeatherFuel"
          subheading="Energy for Every Chirp and Flight"
          btnColor="bg-primary text-white"
          btnText="Checkout Now"
          img="https://png.pngtree.com/png-vector/20240803/ourmid/pngtree-sparrow-eating-food-png-image_13352141.png"
        />
      </div>
    </Container>
  );
};

export default CollectionSection;
