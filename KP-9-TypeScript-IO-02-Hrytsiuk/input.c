int task(int n)
{
  int var_1 = 1;
  int i = 2,v = 1,k = 1;
  while(v < n + 1)
  {
    var_1 = var_1 * i * (i - 1);
    var_1 = var_1 * i * (i + 1);
    i = i + 2;
    v = v + 1;
  }
  int var_2 = 1,count = 2,j = 4;
  while(k < n + 1)
  {
    if (j % count == 0)
    {
      var_2 = var_2 * j / count;
      count = count + 1;
      j = j * 2;
    }
    k = k + 1;
  }
  if (var_2 > var_1)
  {
    return var_2;
  }
  else
  {
    return var_1;
  }
}

int main()
{
  return task(2);
}