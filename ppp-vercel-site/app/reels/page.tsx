import Shell from "@/components/Shell";

export default function Reels() {
  return (
    <Shell active="/reels">
      <div className="copy">
        <p className="panelTitle">COMING SOON</p>

        <div className="reelsGrid">
          <div>
            <div className="panelTitle">IMDb links</div>
            <ul className="imdbList">
              <li>Sally Forcier</li>
              <li>Colin Reeves-Fortnoy</li>
              <li>Lua Mentz</li>
              <li>Paul Montgomery</li>
            </ul>
          </div>

          <div className="player" aria-label="Reel player placeholder">
            <img src="/reels-thumb.png" alt="Reel thumbnail placeholder" />
          </div>

          <div className="soc">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>
    </Shell>
  );
}
