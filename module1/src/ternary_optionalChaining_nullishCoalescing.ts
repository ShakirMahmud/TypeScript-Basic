{
  // 1.11
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 15;

  const canVote = age >= 18 ? "Yes" : "No";
  console.log({ canVote });

  // nullish coalescing operator
  // decision making based on null or undefined
  const name: string | null = null;
  const nameToPrint = name ?? "Guest";
  console.log({ nameToPrint });

  // optional chaining
  const user = {
    name: "Md. Shakir Mahmud",
    age: 25,
    address: {
      street: "123 Main St",
      city: "Dhaka",
      country: "Bangladesh",
    },
  };

  const street = user.address?.street ?? 'No street';
  console.log(street);
}
