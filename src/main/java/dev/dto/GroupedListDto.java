package dev.dto;

import java.util.List;

public class GroupedListDto<K,V>  {
    private K groupKey;
    private List<V> values;

    public GroupedListDto() {}

    public GroupedListDto(K groupKey, List<V> values) {
        this.groupKey = groupKey;
        this.values = values;
    }

    public List<V> getValues() {
        return values;
    }

    public void setValues(List<V> values) {
        this.values = values;
    }

    public K getGroupKey() {
        return groupKey;
    }

    public void setGroupKey(K groupKey) {
        this.groupKey = groupKey;
    }
}
