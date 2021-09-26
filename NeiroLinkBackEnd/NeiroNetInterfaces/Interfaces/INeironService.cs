namespace NeiroNetInterfaces.Interfaces
{
    public interface INeironService
    {
        string CheckLitera(int[,] arr);
        void SaveState();
        string[] GetLiteras();
        string SetTraining(string trainingName, int[,] data);
    }
}
