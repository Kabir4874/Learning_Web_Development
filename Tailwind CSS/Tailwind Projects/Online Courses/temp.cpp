#include <bits/stdc++.h>
using namespace std;
void printConnectedNodes(int X, unordered_map<int, vector<int>> &adj)
{
    if (adj.find(X) == adj.end())
    {
        cout << "-1" << endl;
        return;
    }
    vector<int> connectedNodes = adj[X];
    sort(connectedNodes.begin(), connectedNodes.end(), greater<int>());
    for (int node : connectedNodes)
    {
        cout << node << " ";
    }
    cout << endl;
}
int main()
{
    int N, E;
    cin >> N >> E;
    unordered_map<int, vector<int>> adj;
    for (int i = 0; i < E; i++)
    {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    int Q;
    cin >> Q;
    while (Q--)
    {
        int X;
        cin >> X;
        printConnectedNodes(X, adj);
    }
    return 0;
}
