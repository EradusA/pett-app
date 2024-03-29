export interface Pet {
    id: number;
    name: string;
    photoUrl: string;
    species: string;
    available: boolean;
    birthYear: number;
    dateAdded: string;
  }

export enum SearchByOptions {
  Name = "name",
  Species = "species",
  Available = "available",
  BirthYear = "birthYear",
}

export interface SearchBarProps {
  handleSearch: (query: string, searchBy: SearchByOptions) => void;
}
