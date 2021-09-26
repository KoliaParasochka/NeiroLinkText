namespace NeiroNetInterfaces.Interfaces
{
    public interface INeiron
    {
        void Clear(string name, int x, int y);
        double GetRes(int[,] data);
        int Training(int[,] data);
    }
}
