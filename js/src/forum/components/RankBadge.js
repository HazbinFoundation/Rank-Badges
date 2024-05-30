import Component from 'flarum/common/Component';

export default class RankBadge extends Component {
  view() {
    const attrs = this.attrs;
    const group = attrs.group;
    const color = group.color();
    const icon = group.icon();
    const label = typeof attrs.label === 'undefined' ? group.nameSingular() : attrs.label;

    return (
      <div className="RankBadge" style={`--badge-bg:${color};`}>
        <i className={icon} />
        <span>{label}</span>
      </div>
    );
  }
}
