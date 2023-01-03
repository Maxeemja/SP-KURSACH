#include <stdio.h>
int main()
{
  int N = 1;
  int res1 = 0, res2 = 0, init1 = 2, init2 = 1;
  for (int i = 0; i < N; i++)
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
