int main()
{
  int n = 5;
  int res_a = 0, res_b = 0, init_a = 2, init_b = 1;
  int i = 0;
  while(i < n)
  {
    if (i % 2 == 0)
    {
      res_a += (init_a * (init_a - 1));
    }
    else
    {
      res_a += (init_a * (init_a + 1));
      init_a += 2;
    }

    if (i == 0)
    {
      res_b += (1 / 1);
      init_b = 4;
    }
    else
    {
      if (init_b % (i + 1) == 0)
      {
        res_b += (init_b / (i + 1));
      }
      init_b *= 2;
    }
    i = i + 1;
  }

  if (res_a > res_b)
  {
    return res_a;
  }
  else
  {
    return res_b;
  }
}