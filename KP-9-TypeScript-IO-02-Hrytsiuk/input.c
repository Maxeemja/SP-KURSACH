void main()
{
  int N = 5;
  int res1 = 0, res2 = 0, init1 = 2, init2 = 1;
  int i = 0;
  while(i < N)
  {
    if (i % 2 == 0)
    {
      res1 += (init1 * (init1 - 1));
    }
    else
    {
      res1 += (init1 * (init1 + 1));
      init1 += 2;
    }

    if (i == 0)
    {
      res2 += (1 / 1);
      init2 = 4;
    }
    else
    {
      if (init2 % (i + 1) == 0)
      {
        res2 += (init2 / (i + 1));
      }
      init2 *= 2;
    }
    i = i + 1;
  }

  if (res1 > res2)
  {
    printf("Шукане число: %d", res1);
  }
  else
  {
    printf("Шукане число: %d", res2);
  }
}
