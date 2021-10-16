namespace NeiroLinkBackEnd.Models.ApiParams
{
    public sealed class LearnSymbolModel : RecognizeTextModel
    {
        public string SymbolToLearn { get; set; }
    }
}
