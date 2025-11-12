import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        placeholder="Pesquise serviços e barbearias"
        className="border-border rounded-full"
      />
      <Button variant="default" size="icon" className="rounded-full">
        <SearchInput />
      </Button>
    </div>
  );
};

export default SearchInput;
